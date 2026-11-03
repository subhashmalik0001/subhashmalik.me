/* eslint-disable @typescript-eslint/no-explicit-any, prefer-const, @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import {
  CURRENT_MOCK_USER,
  MOCK_COMMENTS,
  MOCK_POSTS,
  MOCK_USERS,
  MockPost,
} from "./mockData";

const hasDatabase = Boolean(process.env.DATABASE_URL && process.env.DATABASE_URL.trim() !== "");

let mockPostsList = [...MOCK_POSTS];
let mockUsersList = { ...MOCK_USERS };
let mockLikes: Array<{ id: number; userId: string; postId: number }> = [
  { id: 1, userId: "user_subhash", postId: 1 },
];
let mockSaves: Array<{ id: number; userId: string; postId: number }> = [
  { id: 1, userId: "user_subhash", postId: 1 },
];
let mockFollows: Array<{ id: number; followerId: string; followingId: string }> = [
  { id: 1, followerId: "user_subhash", followingId: "user_lamadev" },
  { id: 2, followerId: "user_subhash", followingId: "user_nextjs" },
];

const mockPrismaClient: any = {
  post: {
    findMany: async (args?: any) => {
      let filtered = [...mockPostsList];
      if (args?.where) {
        if (typeof args.where.userId === "string") {
          filtered = filtered.filter((p) => p.userId === args.where.userId);
        }
        if (args.where.parentPostId !== undefined && args.where.parentPostId !== null) {
          filtered = filtered.filter((p) => p.parentPostId === args.where.parentPostId);
        } else if (args.where.parentPostId === null) {
          filtered = filtered.filter((p) => !p.parentPostId);
        }
      }
      const skip = args?.skip || 0;
      const take = args?.take || filtered.length;
      return filtered.slice(skip, skip + take);
    },
    findFirst: async (args?: any) => {
      const postId = args?.where?.id;
      const post = mockPostsList.find((p) => p.id === postId) || mockPostsList[0];
      if (!post) return null;
      return {
        ...post,
        comments: MOCK_COMMENTS.filter((c) => c.parentPostId === post.id || !c.parentPostId),
      };
    },
    count: async (_args?: any) => {
      return mockPostsList.length;
    },
    create: async ({ data }: { data: any }) => {
      const newPost: MockPost = {
        id: Date.now(),
        createdAt: new Date(),
        updatedAt: new Date(),
        desc: data.desc || "",
        img: data.img || null,
        imgHeight: data.imgHeight || null,
        video: data.video || null,
        isSensitive: Boolean(data.isSensitive),
        userId: data.userId || CURRENT_MOCK_USER.id,
        rePostId: data.rePostId || null,
        parentPostId: data.parentPostId || null,
        user: {
          displayName: CURRENT_MOCK_USER.displayName,
          username: CURRENT_MOCK_USER.username,
          img: CURRENT_MOCK_USER.img || null,
        },
        _count: { likes: 0, rePosts: 0, comments: 0 },
        likes: [],
        rePosts: [],
        saves: [],
      };
      if (data.parentPostId) {
        MOCK_COMMENTS.unshift(newPost);
      } else {
        mockPostsList.unshift(newPost);
      }
      return newPost;
    },
    delete: async ({ where }: { where: { id: number } }) => {
      mockPostsList = mockPostsList.filter((p) => p.id !== where.id);
      return { id: where.id };
    },
  },
  user: {
    findUnique: async ({ where }: { where: { username?: string; id?: string } }) => {
      if (where.username) {
        const found = Object.values(mockUsersList).find(
          (u) => u.username.toLowerCase() === where.username?.toLowerCase()
        );
        return found || CURRENT_MOCK_USER;
      }
      if (where.id) {
        return mockUsersList[where.id] || CURRENT_MOCK_USER;
      }
      return CURRENT_MOCK_USER;
    },
    findMany: async (_args?: any) => {
      return Object.values(mockUsersList).slice(0, _args?.take || 5);
    },
    create: async ({ data }: { data: any }) => {
      mockUsersList[data.id] = { ...CURRENT_MOCK_USER, ...data };
      return mockUsersList[data.id];
    },
    update: async ({ where, data }: { where: { id: string }; data: any }) => {
      if (mockUsersList[where.id]) {
        mockUsersList[where.id] = { ...mockUsersList[where.id], ...data };
      }
      return mockUsersList[where.id] || CURRENT_MOCK_USER;
    },
    upsert: async ({ where, create, update }: any) => {
      if (mockUsersList[where.id]) {
        mockUsersList[where.id] = { ...mockUsersList[where.id], ...update };
      } else {
        mockUsersList[where.id] = { ...CURRENT_MOCK_USER, ...create };
      }
      return mockUsersList[where.id];
    },
    delete: async ({ where }: { where: { id: string } }) => {
      delete mockUsersList[where.id];
      return { id: where.id };
    },
  },
  follow: {
    findMany: async (args?: any) => {
      return mockFollows;
    },
    findFirst: async (args?: any) => {
      return mockFollows.find(
        (f) =>
          f.followerId === args?.where?.followerId &&
          f.followingId === args?.where?.followingId
      ) || null;
    },
    create: async ({ data }: { data: any }) => {
      const newFollow = { id: Date.now(), ...data };
      mockFollows.push(newFollow);
      return newFollow;
    },
    delete: async ({ where }: { where: { id: number } }) => {
      mockFollows = mockFollows.filter((f) => f.id !== where.id);
      return { id: where.id };
    },
  },
  like: {
    findFirst: async (args?: any) => {
      return mockLikes.find(
        (l) => l.userId === args?.where?.userId && l.postId === args?.where?.postId
      ) || null;
    },
    create: async ({ data }: { data: any }) => {
      const newLike = { id: Date.now(), ...data };
      mockLikes.push(newLike);
      return newLike;
    },
    delete: async ({ where }: { where: { id: number } }) => {
      mockLikes = mockLikes.filter((l) => l.id !== where.id);
      return { id: where.id };
    },
  },
  savedPosts: {
    findFirst: async (args?: any) => {
      return mockSaves.find(
        (s) => s.userId === args?.where?.userId && s.postId === args?.where?.postId
      ) || null;
    },
    create: async ({ data }: { data: any }) => {
      const newSave = { id: Date.now(), ...data };
      mockSaves.push(newSave);
      return newSave;
    },
    delete: async ({ where }: { where: { id: number } }) => {
      mockSaves = mockSaves.filter((s) => s.id !== where.id);
      return { id: where.id };
    },
  },
};

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma: any = hasDatabase
  ? (globalForPrisma.prisma || new PrismaClient())
  : mockPrismaClient;

if (process.env.NODE_ENV !== "production" && hasDatabase) {
  globalForPrisma.prisma = prisma;
}
