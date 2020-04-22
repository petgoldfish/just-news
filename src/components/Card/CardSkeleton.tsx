import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function CardSkeleton() {
	return (
		<SkeletonTheme color="#616161" highlightColor="grey">
			<div className="card">
				<div className="card__image">
					<Skeleton height={120} />
				</div>
				<div className="card-text">
					<div className="card-text__title">
						<Skeleton />
					</div>
					<div className="card-text__metadata">
						<Skeleton width={150} />
					</div>
					<div className="card-text__summary">
						<Skeleton count={3} />
					</div>
				</div>
			</div>
		</SkeletonTheme>
	);
}
