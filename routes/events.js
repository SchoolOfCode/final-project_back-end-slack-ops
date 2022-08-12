import express from "express";
import {
  getAllEvents,
  getEventsByOrganiser,
  getEventsById,
  getAttendedEvents,
  createEvent,
  deleteEvent,
} from "../models/events.js";
import { getEventTags } from "../models/events_tags.js";
import {
  getEventOrganiserById,
  getUserById,
  getEventAttendees,
} from "../models/users.js";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "you have reached the events endpoint" });
});

/* ___________________________EVENTS ROUTES_______________________________ */

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

router.get("/att/:id", async function (req, res) {
  let data = await getAttendedEvents(req.params.id);
  const responseObject = {
    success: true,
    message: "Events by attendee have been retrieved",
    payload: data,
  };
  console.log(responseObject);
  res.json(data);
});

router.get("/event-org/:id", async function (req, res) {
  let data = await getEventsByOrganiser(req.params.id);
  const responseObject = {
    success: true,
    message: "Events by attendee have been retrieved",
    payload: data,
  };
  console.log(responseObject);
  res.json(data);
});

/* ___________________________TAGS ROUTES_______________________________ */

router.get("/tags/:id", async function (req, res) {
  let data = await getEventTags(req.params.id);
  const responseObject = {
    success: true,
    message: "All event tags retrieved",
    payload: data,
  };
  console.log(responseObject);
  res.json(data);
});

/* ___________________________USER ROUTES_______________________________ */

router.get("/user/:id", async function (req, res) {
  let data = await getUserById(req.params.id);
  const responseObject = {
    success: true,
    message: "User has been retrieved",
    payload: data,
  };
  console.log(responseObject);
  res.json(data);
});
router.get("/organiser/:id", async function (req, res) {
  let data = await getEventOrganiserById(req.params.id);
  const responseObject = {
    success: true,
    message: "User has been retrieved",
    payload: data,
  };
  console.log(responseObject);
  res.json(data);
});

router.get("/attendees/:id", async function (req, res) {
  let data = await getEventAttendees(req.params.id);
  const responseObject = {
    success: true,
    message: "Attendees have been retrieved",
    payload: data,
  };
  console.log(responseObject);
  res.json(data);
});

router.get("/friends/:id", async function (req, res) {
  let data = await getUserFriends(req.params.id);
  const responseObject = {
    success: true,
    message: "Friends have been retrieved",
    payload: data,
  };
  console.log(responseObject);
  res.json(data);
});

/* _______________________________________POST REQUESTS_________________________________________*/
router.post("/all", async function (req, res) {
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

export { router as eventsRouter };
