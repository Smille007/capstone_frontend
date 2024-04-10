import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./NewsApi.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import NewsApiBento from "./NewsApiBento";
import NewsCar from "./NewsCar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsApi = ({ onLoad }) => {
	const [newsArticles, setNewsArticles] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [selectedKeyword, setSelectedKeyword] = useState("lbgt");
	const NewsApiKey =
		import.meta.env.VITE_APP_NEWSAPI_KEY || "34f016ffbcd9498fa866ebfdcfd61e73";
	//delete key before pushing

	const keywordOptions = [
		{ value: "equality", label: "equality" },
		{ value: "politics", label: "politics" },
		{ value: "global issues", label: "global issues" },
		{ value: "lgbt rights", label: "lgbt rights" },
		{ value: "global warming", label: "global warming" },
		{ value: "ukraine", label: "ukraine" },
	];

	useEffect(() => {
		if (selectedKeyword) {
			fetchNewsArticles(selectedKeyword.value);
		}
	}, [selectedKeyword]);

	const handleKeywords = (selectedOption) => {
		setSelectedKeyword(selectedOption);
	};

	const fetchNewsArticles = async (keyword) => {
		onLoad("loading");
		// setLoading(true);
		setError(null);
		try {
			const response = await fetch(
				`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${NewsApiKey}`
			);
			if (!response.ok) {
				throw new Error(
					`Failed to fetch news articles for keyword: ${keyword}`
				);
			}
			const data = await response.json();

			setNewsArticles(data.articles);
		} catch (error) {
			setError(error.message);
		} finally {
			onLoad("finished");
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}
	console.log(newsArticles);

	return (
		<div>
			<Row className="mb-3 ">
				<Form.Group
					as={Col}
					controlId="event_keyword mx-3"
					// style={{ width: "50%" }}
				>
					<Form.Label className=" mt-4 fs-4 d-flex justify-content-center">
						Filter topics by category
					</Form.Label>

					<div
						className="d-flex   
						justify-content-center"
					>
						<Select
							onChange={handleKeywords}
							options={keywordOptions}
							className="py-3 "
							style={{ width: "50vw" }}
							classNamePrefix="select"
							name="event_keywords"
						/>
					</div>
				</Form.Group>
			</Row>
			<Row>
				<NewsCar newsArticles={newsArticles} />
			</Row>
		</div>
	);
};

export default NewsApi;
