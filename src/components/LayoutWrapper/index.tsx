import { Layout, Menu, Row, Col } from "antd";
const { Header, Footer, Content } = Layout;

type Props = {
  children?: React.ReactNode;
};

export const LayoutWrapper = ({ children }: Props) => (
  <Layout className="layout">
    <Header style={{ backgroundColor: "#ccc" }}>
      <Menu mode="horizontal" defaultSelectedKeys={["2"]}></Menu>
    </Header>
    <Content style={{ padding: "0px 50px" }}>
      <div className="site-layout-content ">
        <Row justify="center">
          <Col span={18}>{children}</Col>
        </Row>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: "center",
        backgroundColor: "#ccc",
        marginTop: "30px",
      }}
    ></Footer>
  </Layout>
);
