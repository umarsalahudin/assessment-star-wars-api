import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "./index.module.css";
type Props = {
  size?: number;
};

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const Loader = ({ size }: Props) => (
  <div className={styles.spinnerWrapper}>
    <Spin indicator={antIcon} />
  </div>
);
