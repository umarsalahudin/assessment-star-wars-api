import { useEffect, useState } from "react";
import useActions from "../../app/hooks/useActions";
import useTypedSelector from "../../app/hooks/usetypedSelectors";
import "react-toastify/dist/ReactToastify.css";
import { Typography, Divider, AutoComplete, Table, Pagination } from "antd";
import styles from "./index.module.css";
import { Loader } from "../../components/Loader";
import { columns } from "./constants";
import debounce from "lodash/debounce";
const { Title } = Typography;

export function StarWarsApp() {
  const [page, setPage] = useState(1);
  const [starWarsPeople, setStarWarsPeople] = useState([]);
  const actions = useActions();
  const state = useTypedSelector((state) => state);
  const { getStarWarsPeople }: any = state || {};
  const { results, count }: any = getStarWarsPeople || [];

  useEffect(() => {
    actions.getStarWarsApi({ page });
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    setStarWarsPeople(results);
  }, [results]);

  const onSearchChange = (searchText: any) => {
    if (results) {
      setStarWarsPeople(
        results.filter((item: any) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  };

  console.log(starWarsPeople);

  return (
    <div>
      <div className={styles.row} style={{ padding: "20px 0px 0px" }}>
        <Title>Star Wars People Listing</Title>
        <AutoComplete
          style={{ width: 200 }}
          onSearch={debounce((searchText) => {
            onSearchChange(searchText);
          }, 2000)}
          placeholder="Search"
        />
      </div>
      <Divider orientation="center"></Divider>
      {state.isLoading ? (
        <Loader size={24} />
      ) : (
        <>
          <Table
            columns={columns}
            dataSource={starWarsPeople}
            pagination={false}
          />
          {starWarsPeople && (
            <div style={{ float: "right" }}>
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
