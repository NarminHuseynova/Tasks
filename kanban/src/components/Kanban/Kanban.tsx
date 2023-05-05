import { useState } from "react";
import style from "./Kanban.module.scss";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import DATA from "../../data/DATA";

function Kanban() {
  const [data, setData] = useState(DATA);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData(data);
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={style.kanban}>
        {data.map((section: any) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided: any) => (
              <div
                className={style.kanban_section}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <div className={style.kanban_section_title}>
                  {section.title}
                </div>
                <div className={style.kanban_section_content}>
                  {section.tasks.map((task: any, index: any) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id.toString()}
                      index={index}
                    >
                      {(provided: any, snapshot: any) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0.5" : "1",
                          }}
                        >
                          <div className={style.card}>{task.title}</div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

export default Kanban;
