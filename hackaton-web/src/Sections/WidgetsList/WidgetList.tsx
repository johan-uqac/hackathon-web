import React from "react"
import Title from "../../Components/Draggables/Title/Title"
import Subtitle from "../../Components/Draggables/Subtitle/Subtitle"
import Material from "../../Components/Draggables/Material/Material";
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
        },
        {
            id: "4",
            content: ["Large Title", "Small Title"],
            size: "large",
            component: "title"
        },
        {
            id: "5",
            content: ["Large Title", "Small Title"],
            size: "medium",
            component: "title"
        },
        {
            id: "6",
            content: ["Large Title", "Small Title"],
            size: "small",
            component: "title"
        },
        {
            id: '7',
            content: ["path", "Cadenas", "2"],
            size: "large",
            component: "material",
        }
    ];

    return (
        <div className="widget-list-section">
            <h1>Widgets available</h1>
            <div className="widget-list">
              {widgets.map((widget) => (
                <React.Fragment key={widget.id}>
                    {widget.component === "title" && <Title>{widget}</Title>}
                    {widget.component === "subtitle" && <Subtitle>{widget}</Subtitle>}
                    {widget.component === 'material' && <Material>{widget}</Material>}
                </React.Fragment>
              ))}
            </div>
        </div>
    )
}