"use client";
import { useState, useEffect } from "react";
import { FetchingData } from "@/libs/api-libs";
import Pagination from "./pagination";
import List from "../list/list";

const FetchedData = ({ resource, query, href }) => {
  const [page, setPage] = useState(1);
  const [datas, setDatas] = useState([]);
  const fetchData = async () => {
    const data = await FetchingData(`${resource}`, `${query}${page}`);
    setDatas(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return datas.data ? (
    <div>
      <List api={datas.data} href={href} />
      <Pagination
        setPage={setPage}
        page={page}
        maxPage={datas.pagination?.last_visible_page}
      />
    </div>
  ) : null;
};

export default FetchedData;
