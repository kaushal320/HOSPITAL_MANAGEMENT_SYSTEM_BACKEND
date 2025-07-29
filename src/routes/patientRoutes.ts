import express from "express";
import {
  getAllPatients,
  createPatient,
} from "../controllers/patientController.js";

const router = express.Router();

router.get("/", getAllPatients); // GET /api/v1/patients
router.post("/", createPatient); // POST /api/v1/patients

export default router;
