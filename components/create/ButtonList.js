import React from "react";
import { MdOutlineAddCircleOutline, MdOutlineRemoveCircleOutline } from "react-icons/md";
import { FormProvider, useForm } from "../../hooks/useForm";
import Row from "../layout/Row";
import { Input } from "./Input";

export default function ButtonList() {
  const [formData, setFormData] = useForm();
  let sampleButton = {
    text: "ปุ่ม",
    url: "https://ufacompany1.com/",
    backgroundColor: "#ffffff00",
  };

  const onButtonChange = (button, index) => {
    formData.buttons[index] = button;
    setFormData({ ...formData, buttons: formData.buttons });
  };

  return (
    <div>
      {formData.buttons.map((button, index) => (
        <FormProvider value={[button, (e) => onButtonChange(e, index)]} key={index}>
          <Row>
            <Input label="ข้อความปุ่ม" field="text" />
            <Input label="ลิงค์ปุ่ม" field="url" />
            <Input label="สีของปุ่ม" field="backgroundColor" type="color"  className="narrow"/>
            <div style={{display: "flex", flexDirection: "column", margin: "auto 0"}}  className="narrow">
              <MdOutlineAddCircleOutline size={20} style={{margin: "8 0"}} color="#407a9a" 
                onClick={() => {
                  // Add a new button after the current button
                  formData.buttons.splice(index + 1, 0, { ...sampleButton });
                  setFormData({ ...formData, buttons: formData.buttons });
                }}
              />
              <MdOutlineRemoveCircleOutline size={20} color="#D24B4B" 
                onClick={() => {
                  // Remove the current button
                  formData.buttons.splice(index, 1);
                  setFormData({ ...formData, buttons: formData.buttons });
                }}
              />
            </div>
          </Row>
        </FormProvider>
      ))}
      {formData.buttons.length == 0 && (
        <center>
          <button
            onClick={() => {
              formData.buttons.push({ ...sampleButton });
              setFormData({ ...formData, buttons: formData.buttons });
            }}
          >
            ปุ่มเพิ่ม
          </button>
        </center>
      )}
    </div>
  );
}