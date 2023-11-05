import React from "react"
import WidgetDraggable from "../../Components/Draggables/Draggable"
import Widget from "../../types/Widget";
import "./WidgetList.css"

export default function WidgetList() {
    const widgets: Widget[] = [
        {
            id: "1",
            content: "My title",
            size: "large"
        },
        {
            id: "2",
            content: "Subtitle",
            size: "small"
        },
        {
            id: "3",
            content: "CGU",
            size: "medium"
        }
    ];

    return (
        <div className="widget-list-section">
            <h1>Widgets available</h1>
            <div className="widget-list">
              {widgets.map((widget) => (
                <WidgetDraggable key={widget.id}>{widget}</WidgetDraggable>
              ))}
            </div>
        </div>
    )
}