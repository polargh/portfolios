'use client';

import {getFTCDocuments} from '@/hooks/use-portfolio';
import {useMe} from '@/hooks/use-user';
import Link from 'next/link';
import Image from 'next/image';

export default function FTCPage() {
	const {data: portfolios} = getFTCDocuments();
	const {data: user, mutate} = useMe();

	return (
		<div className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
			<div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
				{portfolios?.map(portfolio => (
					<Link key={portfolio.id} href={portfolio.s3_url ? portfolio.s3_url : ''} target="_blank">
						<div className="flex group">
							<div className="p-1 mx-auto">
								<div className="group-hover:scale-[0.95] ease-out duration-300 transition-all group-hover:opacity-70">
									<div className="flex aspect-square items-center justify-center group">
										<span className="text-4xl font-semibold flex">
											<Image
												className="rounded-2xl max-w-[20rem] m-auto ease-out duration-300 transition-all shadow-lg max-h-[20rem]"
												src={portfolio.s3_url_thumb ? portfolio.s3_url_thumb : ''}
												alt={`${portfolio.team_name} ${portfolio.season} ${portfolio.type}`}
												height={300}
												width={250}
												loading={"lazy"}
											/>
										</span>
									</div>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
