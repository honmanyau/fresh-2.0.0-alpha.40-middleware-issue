import { FreshContext, HttpError } from "fresh";


export default async function ErrorPage(
	ctx: FreshContext,
) {
	const error = await ctx.error;

	if (error instanceof HttpError) {
		const status = error.status;

		if (status === 404) {

			return (
				<div>
					<h1>				
						404 — Oops! We couldn't find what you were looking for!
					</h1>
				</div>
			);
		}
	}

	return <h1>Oh no...</h1>;
}
