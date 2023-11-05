import React from "react"
import Title from "../../Components/Draggables/Title/Title"
import Subtitle from "../../Components/Draggables/Subtitle/Subtitle"

import Widget from "../../types/Widget";
import "./WidgetList.css"
import Machine from "../../Components/Draggables/Machine/Machine";

interface Props {
    widgets: Widget[]
}

export default function WidgetList({widgets}: Props) {

    return (
        <div className="widget-list-section">
            <h1>Widgets available</h1>
            <div className="widget-list">
              {widgets.map((widget) => (
                <React.Fragment key={widget.component + widget.id + widget.size}>
                    {widget.component === "title" && <Title>{widget}</Title>}
                    {widget.component === "subtitle" && <Subtitle>{widget}</Subtitle>}
                    {widget.component === "machine" && <Machine>{widget}</Machine>}
                </React.Fragment>
              ))}
            </div>
        </div>
    )
}