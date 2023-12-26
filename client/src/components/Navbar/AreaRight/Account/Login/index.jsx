import { Fragment } from "react";
import Icon from "../../../../Icon/Icon";
import Input from "../../../../Input";
import Title from "../../../../Title/Title";
import { IoIosClose } from "react-icons/io";
import { BsCheck } from "react-icons/bs";
import Button from "../../../../Buttons/Button";
const data = [
  {
    id: 1,
    type: "input",
    data: [
      {
        id: "email",
        name: "Email Address",
        nameError: "Please enter your email address",
        placeHolder: "",
        type: "email",
      },
    ],
  },
  {
    id: 2,
    type: "input",
    data: [
      {
        id: "password",
        name: "Password",
        nameError: "Please enter your password",
        placeHolder: "",
        type: "password",
      },
    ],
  },
];
function Login() {
  const success = true;
  const count = 1;
  return (
    <div className="w-full relative p-4 overflow-y-auto h-full">
      <div className="flex flex-col items-center gap-4">
        <Title title="Đăng nhập" fontBold xxxl />

        <div className="w-full flex flex-col gap-4">
          {data.map((item, index) => (
            <div key={index}>
              {item?.type == "input" && (
                <Fragment>
                  {item?.data &&
                    item?.data.map((x, index) => {
                      return (
                        <Fragment key={index}>
                          {success ? <Title title={x?.name} fontBold xl nowrap={false} /> : <Title title={x?.nameError} fontBold xl nowrap={false} className="text-[#a30000] dark:text-error-100" />}
                          <div className="relative w-full">
                            <Input
                              type={x?.type}
                              className={`rounded-md h-[42px] 
                            ${success ? (count > 0 ? "focus:shadow-[0_0_0_1px_rgba(0,128,9,1)]" : "") : count > 0 ? "border-[rgb(204,0,0)] focus:shadow-[0_0_0_1px_rgba(204,0,0,1)]" : "focus:shadow-[0_0_0_1px_rgba(204,0,0,1)]"}`}
                              // value={value}
                              // onFocus={() => handleFocus(x?.id)}
                              // onBlur={() => handleBlur(x?.id)}
                              // onChange={(e) =>
                              //   handleChange(x?.id, e.target.value)
                              // }
                            />
                            {status && count > 0 && <Icon classIcon={`absolute flex items-center justify-center top-0 right-0 rounded-tr-md rounded-br-md bottom-0 text-white ${success ? "bg-success-50" : "bg-error-100"}`} icon={success ? BsCheck : IoIosClose} size={24} />}
                          </div>
                          {x?.subName && <Title title={x?.subName} xl nowrap={false} className="dark:text-primary-50" />}
                        </Fragment>
                      );
                    })}
                </Fragment>
              )}
            </div>
          ))}
        </div>

        <Button title="Đăng nhập" background classButton="ml-0 mr-0 justify-center" className="pt-3 pb-3 pl-4 pr-4 rounded-lg" fontBold xxxl />
      </div>
    </div>
  );
}

export default Login;
