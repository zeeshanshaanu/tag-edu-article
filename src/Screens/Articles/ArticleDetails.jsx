import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
/////////////////////////   *****************   ///////////////////////
import HeaderTabs from "../../components/HeaderTabs/HeaderTabs";

// ///////////////////////   *****************   ///////////////////////
// ///////////////////////   *****************   ///////////////////////

const ArticleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const AuthToken = useSelector((state) => state?.Auth);
  const token = AuthToken?.Authtoken;
  const [ArticleDetail, setArticleDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  const [articlesData, setArticlesData] = useState([]);

  const FetchArticles = async () => {
    try {
      const response = await axios.get(`/api/article`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const result = response?.data;
      console.log(result);
      setArticlesData(result?.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    if (id) {
      ArticleDetailDataFtn();
      window.scrollTo(0, 0);
    }
  }, [id]);

  useEffect(() => {
    FetchArticles();
  }, []);

  const ArticleDetailDataFtn = async () => {
    if (initialLoad) {
      setLoading(true);
    }
    try {
      const response = await axios.get(`/api/article/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response?.data);
      setArticleDetail(response?.data?.data);
      setLoading(false);
      setInitialLoad(false);
    } catch (error) {
      setLoading(false);
      setInitialLoad(false);

      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    ArticleDetailDataFtn();
  }, []);

  return (
    <div className="p-3">
      <HeaderTabs />
      {/* Followers Hub header */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <span className="text-center font-[500] text-[16px] text-gray-400">
            Loading...
          </span>
        </div>
      ) : (
        <div className="">
          <div className="my-4 HeaderGreenBGimage p-[20px] rounded-[12px]">
            <h1 className="satoshi_italic lg:text-[40px] text-[20px] font-[900] black line-clamp-3">
              {ArticleDetail?.title}
            </h1>
            <p className="lg:text-[15px] text-[13px] font-[500] black max-w-[500px] line-clamp-2 mt-2">
              {ArticleDetail?.preview_text}
            </p>
          </div>
          {/*  */}

          <div className="grid grid:cols-1 lg:grid-cols-12 md:grid-cols-12 gap-4">
            <div className="bg-white rounded-[8px] border-[1px] border-[#E8E8E8] bg_white rounded-[8px] col-span-12 md:col-span-12 lg:col-span-8 p-2 lg:p-4">
              <div className="">
                <img
                  src={ArticleDetail?.image}
                  alt={ArticleDetail?.image}
                  className="w-full h-[300px] object-cover rounded-[8px]"
                />
              </div>
              {/* Detail */}
              <div className="mt-3">
                <div className="flex gap-[12px]">
                  <h1 className="text-[12px] font-[700] rounded-[8px] border-[1px] border-[#E8E8E8] px-2 py-1 my-auto capitalize">
                    {ArticleDetail?.category}
                  </h1>
                  <p className="text-[12px] font-[500] gray my-auto">
                    {new Date(ArticleDetail?.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                {/*  */}
                <h1 className="lg:text-[20px] text-[16px] font-[700] mt-[12px]">
                  {ArticleDetail?.title}{" "}
                </h1>
                {/*  */}
                <div className="mt-[6px]">
                  <div
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: ArticleDetail?.content,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="bg_white rounded-[8px] col-span-12 md:col-span-12 lg:col-span-4 p-2 lg:p-4">
              <h1 className="text-[20px] font-[700] black">Latest Articles </h1>

              <div className="mt-4">
                {articlesData?.length > 0 ? (
                  articlesData?.slice(0, 5)?.map((items, index) => {
                    return (
                      <div
                        onClick={() =>
                          navigate(`/ArticleDetails/${items?._id}`)
                        }
                        key={index}
                        className={`flex gap-3 mt-3 hover:bg-[#F4F4F4] hover:rounded-[8px] cursor-pointer ${
                          id === items?._id ? "bg-[#F4F4F4]" : ""
                        }`}
                      >
                        <div className="my-auto  w-[100px] h-[60px] lg:w-[130px] lg:h-[80px]">
                          <img
                            src={items?.image}
                            alt={items?.image}
                            className="w-full h-full object-cover my-auto rounded-[8px]"
                          />{" "}
                        </div>
                        <div className="my-auto">
                          <h1 className="text-[14px] font-[500] black line-clamp-2 lg:w-[200px] md:w-[600px] w-[200px]">
                            {index + 1}.{items?.title}
                          </h1>
                          <p className="flex gap-1 text-[14px] font-[500] gray mt-[5px]">
                            <div className="flex gap-[12px]">
                              <h1 className="text-[10px] font-[700] rounded-[8px] border-[1px] border-[#E8E8E8] px-2 py-[5px] my-auto capitalize">
                                {items?.category}
                              </h1>
                              <p className="text-[12px] font-[500] gray my-auto">
                                {new Date(items?.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </p>
                            </div>
                          </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <span className="text-center p-10 grid grid-cols-1 col-span-10 font-[500] lightgray3 text-[16px]">
                    No vedio list{" "}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDetails;
