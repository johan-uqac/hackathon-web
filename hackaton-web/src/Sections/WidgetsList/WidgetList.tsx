import React from "react"
import Title from "../../Components/Draggables/Title/Title"
import Subtitle from "../../Components/Draggables/Subtitle/Subtitle"

import Widget from "../../types/Widget";
import "./WidgetList.css"

export default function WidgetList() {
    const widgets: Widget[] = [
        {
            id: "1",
            content: ["M1-B", "Broyeur M1-B", "2 - Cadenassage complet"],
            size: "large",
            component: "subtitle"
        },
        {
            id: "2",
            content: ["M1-B", "Broyeur M1-B", "2 - Cadenassage complet"],
            size: "medium",
            component: "subtitle"
        },
        {
            id: "3",
            content: ["M1-B", "Broyeur M1-B", "2 - Cadenassage complet"],
            size: "small",
            component: "subtitle"
        }
    ];

    return (
        <div className="widget-list-section">
            <h1>Widgets available</h1>
            <div className="widget-list">
              {widgets.map((widget) => (
                
                widget.component === "subtitle" && <Subtitle key={widget.id}>{widget}</Subtitle>
              ))}
            </div>
        </div>
    )
}