import { useEffect, useState } from "react";
import useActions from "../../app/hooks/useActions";
import useTypedSelector from "../../app/hooks/usetypedSelectors";
import "react-toastify/dist/ReactToastify.css";
import { Typography, Divider, Button, Select, Table, Pagination } from "antd";
import styles from "./index.module.css";
import { Loader } from "../../components/Loader";
import { columns } from "./constants";
const { Title } = Typography;

export function StarWarsApp() {
  const [page, setPage] = useState(1);
  const actions = useActions();
  const state = useTypedSelector((state) => state);
  const { getStarWarsPeople }: any = state || {};
  const { results, count, previous, next }: any = getStarWarsPeople || [];

  useEffect(() => {
    actions.getStarWarsApi({ page });
  }, [page]);

  const handlePrevPage = (prevPage: number) => {
    if (previous !== null) {
      const prev = previous.split("?page=");
      setPage(prev[1]);
    }
  };

  const handleNextPage = (nextPage: number) => {
    if (next !== null) {
      const nextPage = next.split("?page=");
      setPage(nextPage[1]);
    }
  };
  return (
    <div>
      <div className={styles.row} style={{ padding: "20px 0px 0px" }}>
        <Title>Star Wars People Listing</Title>
      </div>
      <Divider orientation="center"></Divider>
      {state.isLoading ? (
        <Loader size={24} />
      ) : (
        <>
          <Table columns={columns} dataSource={results} pagination={false} />
          {results && (
            <div>
              <Divider orientation="center"></Divider>
              <Pagination
                defaultCurrent={page}
                total={count}
                onChange={(page) => setPage(page)}
                pageSizeOptions={[10]}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
