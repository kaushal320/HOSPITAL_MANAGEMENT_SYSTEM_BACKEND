import { Request, Response } from "express";
import Patient from "../models/patientModel.js";

// @desc Get all patients
// @route GET /api/patients
// @access Public
export const getAllPatients = async (req: Request, res: Response) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({
      success: true,
      count: patients.length,
      data: patients,
    });
  } catch (error) {
    console.error("Error fetching patients:", error);
    res.status(500).json({
      success: false,
      message: "Server Error: Unable to fetch patients",
    });
  }
};

// @desc Create a new patient
// @route POST /api/patients
// @access Public (or Protected if needed)
export const createPatient = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, age, gender, phone, address } = req.body;

    // Basic validation
    if (!firstName || !lastName || !age || !gender || !phone || !address) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Check for existing patient with same phone number (optional)
    const existing = await Patient.findOne({ phone });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Patient with this phone number already exists.",
      });
    }

    const newPatient = new Patient({
      firstName,
      lastName,
      age,
      gender,
      phone,
      address,
    });

    const savedPatient = await newPatient.save();

    res.status(201).json({
      success: true,
      message: "Patient created successfully",
      data: savedPatient,
    });
  } catch (error) {
    console.error("Error creating patient:", error);
    res.status(500).json({
      success: false,
      message: "Server Error: Unable to create patient",
    });
  }
};
