import React from "react";

function Dashboard() {
  const defects = [
    {
      room: "spa7",
      location: "lan can jacuzzi",
      defect: "gỗ mục",
      severity: "high",
      status: "đang xử lý",
      assigned_to: "binh",
      completion_time: "2 ngày"
    },
    {
      room: "spa3",
      location: "p.trị liệu",
      defect: "tróc sơn",
      severity: "low",
      status: "đã yêu cầu",
      assigned_to: "binh",
      completion_time: "3 ngày"
    },
    {
      room: "spa8",
      location: "cửa steam",
      defect: "nứt",
      severity: "medium",
      status: "đang xử lý",
      assigned_to: "binh",
      completion_time: "1 ngày"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Spa Defect Tracker</h1>
      <table className="table-auto w-full mt-4 border">
        <thead>
          <tr>
            <th>Phòng</th>
            <th>Vị trí</th>
            <th>Lỗi</th>
            <th>Người thực hiện</th>
            <th>Tình trạng</th>
            <th>Thời gian</th>
          </tr>
        </thead>
        <tbody>
          {defects.map((d, i) => (
            <tr key={i} className={d.severity === "high" ? "bg-red-200 font-bold" : ""}>
              <td>{d.room}</td>
              <td>{d.location}</td>
              <td>{d.defect}</td>
              <td>{d.assigned_to}</td>
              <td>{d.status}</td>
              <td>{d.completion_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
