import {
  Avatar,
  Breadcrumb,
  Button,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Row,
  Space,
  theme,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/Constants/storageKey";
import { useRouter } from "next/navigation";
const { Header: AntHeader } = Layout;

const Header = () => {
  const router = useRouter();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" danger>
          LogOut
        </Button>
      ),
    },
  ];
  return (
    <AntHeader style={{ background: "#ffff" }}>
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <Dropdown menu={{ items }}>
          <Space wrap size={16}>
            <Avatar
              style={{ color: "black" }}
              size="large"
              icon={<UserOutlined />}
            />
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
