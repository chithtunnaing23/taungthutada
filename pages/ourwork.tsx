import React from "react";
import { NextPage } from "next";
import ImageHolder from "../public/image_holder.svg";
import Image from "next/legacy/image";

/* Achievement Section */
import AchievementCard from "../components/AchievementCard";

/* Value Chain Images */
import InputShopImg from "../public/ourwork/inputs-shop.svg";
import SubstainablePartnerShip from "../public/ourwork/substainable-partnership.svg";
import ContractFarming from "../public/ourwork/contract-framing.svg";
import RegionalMarket from "../public/ourwork/regional-market.svg";
import LineVertical from "../public/ourwork/line-vertical.svg";
import LineHorizontal from "../public/ourwork/line-horizontal.svg";

import { motion } from "framer-motion";

// Languages
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ILocale } from "../@types.taungthutada";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCoins,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";

// variants
import {
	fadeUp,
	container,
	slideIn,
	fade,
} from "../variants";
import SEO from "../components/SEO/SEO";

import HEKSlogo from "../assets/partners/heks-logo.jpg";
import SANTHITlogo from "../assets/partners/santhit-logo.png";

const Ourwork: NextPage = () => {
	const { t } = useTranslation("common");

	return (
		<main>
			<SEO title="Our Mission" />
			<section className="bg-midColor h-[350px] flex justify-center items-center">
				<div className="flex space-x-2">
					<motion.div
						className="w-16 h-0.5 bg-white rounded-full mt-3"
						variants={fadeUp}
						initial="initial"
						whileInView="animate"
					></motion.div>
					<motion.div
						className="sm:w-[600px]"
						variants={container}
						initial="initial"
						whileInView="animate"
					>
						<div className="overflow-hidden inline-block">
							<motion.p
								className="text-white font-semibold text-xl lg:text-2xl"
								variants={fadeUp}
							>
								Our Vision
							</motion.p>
						</div>

						<motion.p
							className="text-white text-md lg:text-lg"
							variants={fadeUp}
						>
							Taungthutada, TTTD envisions a rural area
							where each farmer is able to access resources
							and receive fair reward for their efforts in
							rural economy and our food system as a whole.
						</motion.p>
					</motion.div>
				</div>
			</section>
			<section className="mx-4 sm:mx-8 lg:mx-16  bg-white">
				<motion.h3
					className="font-bold text-lg sm:text-2xl text-center my-12 sm:my-12"
					variants={fadeUp}
					initial="initial"
					whileInView="animate"
				>
					Our Achievements
				</motion.h3>
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-3 gap-3"
					variants={container}
					initial="initial"
					whileInView="animate"
				>
					<AchievementCard
						title="AbCD"
						description="short desc"
						imageHolder={ImageHolder}
					/>
					<AchievementCard
						title="AbCD"
						description="short desc"
						imageHolder={ImageHolder}
					/>
					<AchievementCard
						title="AbCD"
						description="short desc"
						imageHolder={ImageHolder}
					/>
				</motion.div>

				<div>
					<h3 className="font-bold text-xl lg:text-2xl text-center mt-6">
						Our Farmer Story
					</h3>
				</div>

				{/* MOVE */}
				<div>
					<motion.h3
						className="font-bold text-xl lg:text-2xl text-center my-6 sm:my-6"
						variants={fadeUp}
						initial="initial"
						whileInView="animate"
					>
						Our Value Chain Strategy
					</motion.h3>
					<motion.p className="text-center px-16 mb-4">
						We are a Value-chain Development Firm that aims
						to grow, transport & transform crops into
						sustainable responsible products and commodities
						in rural areas with small-holder farmers for the
						purpose of offering these high-quality products
						in Local, ASEAN, and international markets at a
						highly competitive price.
					</motion.p>
					<motion.div
						className="flex justify-center flex-col sm:flex-row sm:space-x-4"
						variants={container}
						initial="initial"
						whileInView="animate"
					>
						<motion.div
							className="flex flex-col justify-center"
							variants={fadeUp}
						>
							<Image
								src={InputShopImg}
								alt={"Input Shop Img"}
								width={80}
								height={80}
							/>
							<p className="text-center text-md lg:text-xl mt-4">
								Inputs Shop
							</p>
						</motion.div>

						{/* Line Horizontal */}
						<motion.div
							className="hidden sm:flex items-center"
							variants={slideIn}
						>
							<Image
								src={LineHorizontal}
								alt={"horizontal line"}
								width={80}
							/>
						</motion.div>

						{/* Line Vertical */}
						<motion.div
							className="flex sm:hidden items-center justify-center my-4 sm:my-0"
							variants={fadeUp}
						>
							<Image
								src={LineVertical}
								alt={"horizontal line"}
								height={100}
							/>
						</motion.div>

						<motion.div
							className="flex flex-col justify-center"
							variants={fadeUp}
						>
							<Image
								src={SubstainablePartnerShip}
								alt={"Substainable Parnership"}
								width={80}
								height={80}
							/>
							<p className="text-center text-md lg:text-xl mt-4">
								Substainable Partnership
							</p>
						</motion.div>

						{/* Line Horizontal */}
						<motion.div
							className="hidden sm:flex items-center"
							variants={slideIn}
						>
							<Image
								src={LineHorizontal}
								alt={"horizontal line"}
								width={80}
							/>
						</motion.div>

						{/* Line Vertical */}
						<motion.div
							className="flex sm:hidden items-center justify-center my-4 sm:my-0"
							variants={fadeUp}
						>
							<Image
								src={LineVertical}
								alt={"horizontal line"}
								height={100}
							/>
						</motion.div>
						<motion.div
							className="flex flex-col justify-center"
							variants={fadeUp}
						>
							<Image
								src={ContractFarming}
								alt={"Contract Farming Img"}
								width={80}
								height={80}
							/>
							<p className="text-center text-md lg:text-xl mt-4">
								Contract Farming
							</p>
						</motion.div>

						{/* Line Horizontal */}
						<motion.div
							className="hidden sm:flex items-center"
							variants={slideIn}
						>
							<Image
								src={LineHorizontal}
								alt={"horizontal line"}
								width={80}
							/>
						</motion.div>

						{/* Line Vertical */}
						<motion.div
							className="flex sm:hidden items-center justify-center my-4 sm:my-0"
							variants={fadeUp}
						>
							<Image
								src={LineVertical}
								alt={"horizontal line"}
								height={100}
							/>
						</motion.div>
						<motion.div
							className="flex flex-col justify-center"
							variants={fadeUp}
						>
							<Image
								src={RegionalMarket}
								alt={"Regional Market Img"}
								width={80}
								height={80}
							/>
							<p className="text-center text-md lg:text-xl mt-4">
								Regional Market
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div className="mt-[60px]">
					<motion.div
						className="grid grid-cols-2"
						variants={container}
						initial="initial"
						whileInView="animate"
					>
						<div className="flex justify-center">
							<motion.div variants={fadeUp}>
								<motion.h3 className="font-bold text-xl lg:text-2xl text-center my-6">
									Our Services
								</motion.h3>
								<ul className="list-disc">
									<li>Contact Farming</li>
									<li>Innovative Inputs Service</li>
									<li>Business Development & Souring</li>
								</ul>
							</motion.div>
						</div>
						<div className="flex justify-center">
							<motion.div variants={fadeUp}>
								<motion.h3 className="font-bold text-xl lg:text-2xl text-center my-6">
									Social Impact
								</motion.h3>
								<ul className="list-disc">
									<li>Women empowerment in Supply Chain</li>
									<li>
										Marginalized youths and community
										employment
									</li>
								</ul>
							</motion.div>
						</div>
						<div className="col-span-2">
							<div className="flex justify-center">
								<motion.div variants={fadeUp}>
									<motion.h3 className="font-bold text-xl lg:text-2xl text-center my-6">
										Finance
									</motion.h3>
									<div className="grid grid-cols-2 gap-4">
										<div className="flex justify-center">
											<div>
												<div className="flex justify-center">
													<FontAwesomeIcon
														icon={faCoins}
														className="w-[40px] text-mainColor"
													/>
												</div>

												<p className="text-center mt-2">
													USD $40,000
													<br />
													(Grants, Equity Investment &
													Parnership Projects)
												</p>
											</div>
										</div>
										<div className="flex justify-center">
											<div>
												<div className="flex justify-center">
													<FontAwesomeIcon
														icon={faUsers}
														className="w-[40px] text-mainColor"
													/>
												</div>
												<p className="text-center mt-2">
													835
													<br />
													(Training, Users, and Support)
												</p>
											</div>
										</div>
									</div>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
			<section className="mx-4 sm:mx-8 lg:mx-16 bg-white"></section>
			<section className="mx-4 sm:mx-8 lg:mx-16 bg-white">
				<motion.div
					variants={fadeUp}
					initial="initial"
					whileInView="animate"
				>
					<h3 className="font-bold text-xl lg:text-2xl text-center mt-6">
						Our Partners
					</h3>
					<div className="flex justify-center flex-col md:flex-row">
						<Image
							src={HEKSlogo}
							alt="heks-logo"
							width={757.5 / 2}
							height={411.3 / 2}
							objectFit="contain"
						/>
						<Image src={SANTHITlogo} alt="santhit-logo" />
					</div>
				</motion.div>
			</section>
		</main>
	);
};

// test

export const getStaticProps = async ({
	locale,
}: ILocale) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default Ourwork;