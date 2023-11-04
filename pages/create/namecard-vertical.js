import React from "react";
import MessagePreview from "../../components/common/MessagePreview";
import BackgroundSelector from "../../components/create/BackgroundSelector";
import CreateForm from "../../components/create/CreateForm";
import { Checkbox, Input } from "../../components/create/Input";
import Row from "../../components/layout/Row";

export default function CreateVertical() {
  return (
    <CreateForm>
      <div style={{ flex: 2 }}>
        <Row>
          <Input label="ชื่อ" field="name" />
          <Input label="ชื่อ(กิจกรรม)" field="nameEN" />
        </Row>
        <Row>
          <Input label="ชื่อเว็บ" field="company" />
          <Input label="ชื่อเว็บ (อังกฤษ)" field="companyEN" />
        </Row>
        <Input label="Logo" field="logo" />
        <Row>
          <Input label="ชื่องาน" field="jobTitle" />
          <Input label="ระดับ" field="jobTitleEN" />
          <Checkbox label="สีพื้นหลัง" field="highlightTitle" />
        </Row>
        <Row>
          <Input label="Email" field="email" />
          <Input label="หมายเลขโทรศัพท์" field="phone" />
        </Row>
        <Input label="ไอดีไลน์" field="address" />
        <Input label="URL" field="website" />
      </div>
      <div style={{ flex: 1 }}>
        <label>ดูตัวอย่าง</label>
        <MessagePreview template="namecard-vertical" style={{ width: 300 }} />
      </div>
      <div style={{ flex: 1 }}>
        <Row>
          <Input label="สีตัวอักษร" field="textColor" type="color" />
          <Input label="ชื่อ บริษัท" field="companyColor" type="color" />
          <Input label="สีชื่อ" field="nameColor" type="color" />
          <Input label="สีพื้นหลัง" field="backgroundColor" type="color" />
        </Row>
        <Row>
          <Input label="อัตราส่วนคอลัมน์ (top）" field="topFlex" type="number" style={{ width: 0 }} />
          <Input label="อัตราส่วนคอลัมน์ (ปานกลาง）" field="middleFlex" type="number" style={{ width: 0 }} />
          <Input label="อัตราส่วนคอลัมน์ (ล่าง）" field="bottomFlex" type="number" style={{ width: 0 }} />
        </Row>
        <BackgroundSelector orientation="vertical" height={48} style={{ marginBottom: 12 }} />
      </div>
    </CreateForm>
  );
}