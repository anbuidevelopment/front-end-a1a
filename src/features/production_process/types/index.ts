export interface ListItem {
  id: number;
  text: string;
  panel:string
}

export interface DraggableItemProps {
  index: number;
  item: ListItem;
  listIndex: number;
  tooltipStatus:boolean;
}

export interface DroppableListProps {
  list: ListItem[];
  index: number;
  onDrop: (draggedListIndex: number, droppedListIndex: number, draggedIndex: number, droppedIndex: number) => void;
}