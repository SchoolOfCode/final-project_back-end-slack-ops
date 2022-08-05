import express from "express";
import {
  getAllEvents,
  getEventsByUser,
  getEventsByName,
  createEvent,
  deleteEvent,
} from "../models/events.js";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "you have reached the events endpoint" });
});

router.get("/all", async function (req, res) {
  let data = await getAllEvents();
  const responseObject = {
    success: true,
    message: "All events retrieved",
    payload: data,
  };
  console.log(responseObject);
  res.json(data);
});

router.post("/", async function (req, res) {
  console.log(req);
  let data = await createEvent(req.body);
  const responseObject = {
    success: true,
    message: "Event created",
    payload: data,
  };
  //console.log(responseObject);
  res.json(responseObject);
});

router.delete("/:id", async function (req, res) {
  let data = await deleteEvent(req.params.id);
  const responseObject = {
    success: true,
    message: "Event deleted",
    payload: data,
  };
  //console.log(responseObject);
  res.json(responseObject);
});

router.patch("/:id", async function (req, res) {
  let newEventDescription = req.body.eventDescription;
  let data = await editEvent(req.params.id, newEventDescription);
  const responseObject = {
    success: true,
    message: "Event edited",
    payload: data,
  };
  res.json(responseObject);
});

export  {router as eventsRouter};