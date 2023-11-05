import React from "react"
import Title from "../../Components/Draggables/Title/Title"
import Widget from "../../types/Widget";
import "./WidgetList.css"

export default function WidgetList() {
    const widgets: Widget[] = [
        {
            id: "1",
            content: ["Large title", "Large subtitle"],
            size: "large",
            component: "title"
        },
        {
            id: "2",
            content: ["Medium title", "Medium subtitle"],
            size: "medium",
            component: "title"
        },
        {
            id: "3",
            content: ["Small title", "Small subtitle"],
            size: "small",
            component: "title"
        }
    ];

    return (
        <div className="widget-list-section">
            <h1>Widgets available</h1>
            <div className="widget-list">
              {widgets.map((widget) => (
                widget.component === "title" && <Title key={widget.id}>{widget}</Title>
              ))}
            </div>
        </div>
    )
}