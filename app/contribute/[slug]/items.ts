import { allContributes } from "contentlayer/generated";

export const items = allContributes.map((t) => t.title);
