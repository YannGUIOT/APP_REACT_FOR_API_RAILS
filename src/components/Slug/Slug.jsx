import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

export const Slug = () => {
  const { otherSlug } = useParams();
  const [currentSlug, setCurrentSlug] = useState(undefined);
  const navigate = useNavigate();

  const datas = [
    {
      slug: "slug1",
      title: "Slug #1 Title",
      info: "Slug 1 informations",
    },
    {
      slug: "slug2",
      title: "Slug #2 Title",
      info: "Slug 2 informations",
    },
    {
      slug: "slug3",
      title: "Slug #3 Title",
      info: "Slug 3 informations",
    },
  ];

  useEffect(() => {
    const foundSlug = datas.find((data) => data.slug === otherSlug);
    setCurrentSlug(foundSlug);

    if (!foundSlug) {
      navigate("/*");
    }
  }, [otherSlug, history]);

  return (
    <div className="info">
      {currentSlug && (
        <>
          <h2>{currentSlug.title}</h2>
          <p>{currentSlug.info}</p>
          <br></br>
        </>
      )}
      <ul>
        <li>
          <Link to="/other"> Back </Link>
        </li>
      </ul>
    </div>
  );
};
