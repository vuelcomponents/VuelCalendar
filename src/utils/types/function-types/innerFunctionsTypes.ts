import {VuelCalendarEvent} from "../VuelCalendarEvent.ts";

type PushToSplit =  (event:VuelCalendarEvent, excludedDay?:number) => void;
type PreventResize =(method:Function, returnable?:any)=>any;
type EventTemplate = (event:VuelCalendarEvent) => void;
export type {
    PushToSplit,
    PreventResize,
    EventTemplate
}