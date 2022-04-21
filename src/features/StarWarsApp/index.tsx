import { useEffect, useState } from "react";
import useActions from "../../app/hooks/useActions";
import useTypedSelector from "../../app/hooks/usetypedSelectors";
import "react-toastify/dist/ReactToastify.css";
import { Typography, Divider, Button, Select, Table, Space } from "antd";
import styles from "./index.module.css";
import { Loader } from "../../components/Loader";
import { columns } from "./constants";
const { Title } = Typography;

export function StarWarsApp() {
  const actions = useActions();
  const state = useTypedSelector((state) => state);

  const { getStarWarsPeople }: any = state || {};

  useEffect(() => {
    actions.getStarWarsApi();
  }, []);

  return (
    <div>
      <div className={styles.row} style={{ padding: "20px 0px 0px" }}>
        <Title>Star Wars People Listing</Title>
      </div>
      <Divider orientation="center"></Divider>
      {state.isLoading ? (
        <Loader size={24} />
      ) : (
        <Table columns={columns} dataSource={getStarWarsPeople} />
      )}
    </div>
  );
}
