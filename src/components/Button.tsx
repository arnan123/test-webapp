import Button from "react-bootstrap/Button";

function ButtonComponent({ text = "" }: { text: string }) {
  return (
    <Button className="text-[14px] bg-[#039444] rounded-full px-[40px] py-[14px] text-white">
      {text}
    </Button>
  );
}

export default ButtonComponent;
