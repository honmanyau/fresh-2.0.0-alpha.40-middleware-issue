import { FreshContext, HttpError } from "fresh";

export async function handler(ctx: FreshContext) {
	const x: number = 41;

	if (x !== 42) {
		throw new HttpError(404);
	}

	return await ctx.next();
}
