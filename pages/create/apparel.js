import React from "react";
import MessagePreview from "../../components/common/MessagePreview";
import ButtonList from "../../components/create/ButtonList";
import CreateForm from "../../components/create/CreateForm";
import { Input } from "../../components/create/Input";
import Row from "../../components/layout/Row";

export default function CreateApparel() {
  return (
    <CreateForm>
      <div style={{ flex: 2 }}>
        <Input label="ชื่อ" field="title" />
        <Input label="เนื้อหา" field="description" />
        <Input label="ลิงค์ภาพพื้นหลัง（3:2）" field="backgroundUrl" />
        <ButtonList />
        <Row>
          <Input label="สีพื้นหลัง" field="backgroundColor" type="color" />
          <Input label="สีตัวอักษร" field="textColor" type="color" />
        </Row>
      </div>
      <div style={{ flex: 1 }}>
        <label>ดูตัวอย่าง</label>
        <MessagePreview template="apparel" style={{ width: 300 }} />
      </div>
    </CreateForm>
  );
}