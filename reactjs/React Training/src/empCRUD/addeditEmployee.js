import { ErrorMessage } from "@hookform/error-message";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getEmployee, updateEmployee, addEmployee } from "./employee.service";
export default function AddEditEmployee() {
    const navigate = useNavigate();
    let { empid } = useParams();
    // addition of employee  localhost:5000/employees/create
    //updation of employee   localhost:5000/employees/update/2
    //let location = useLocation();
    useEffect(() => {
        if (empid) {
            getEmployee(empid).then((data) => {
                console.log('Data is', data);
                setValue("name", data.name);
                setValue("designation", data.designation);
            })
        }
    }, []);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();
    async function onSubmit({ id, name, designation }) {
        if (empid) {
            updateEmployee(empid, name, designation).then(() => {
                Swal.fire({
                    title: "Updated",
                    text: "Employee Delails Updated",
                    icon: "success",
                });
            })
            navigate("/employees");
        }
        else {
            addEmployee({ id, name, designation }).then(() => {
                Swal.fire({
                    title: "Added",
                    text: "Employee Delails Added",
                    icon: "success",
                });
            })
            navigate("/employees");
        }
    }
    return (
        <div className="container">
            <h2>{empid ? "Edit EMployee Detail" : "Add Employee"}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                {empid ? <div>
                    <h3>Edit Details for Employee Id: <span className="chip-container">{empid}</span></h3>
                </div> :
                    <div>
                        <label htmlFor="id" className="inputLabel">Id</label>
                        <input
                            type="number"
                            className="inputTag"
                            {...register("id", {
                                required: "This is required.",
                            })}
                            placeholder="Enter Employee Id"
                        />
                        <ErrorMessage
                            errors={errors}
                            render={({ message }) => <p className="errorMsg">{message}</p>}
                        />
                    </div>
                }
                <label htmlFor="name" className="inputLabel">Name</label><input
                    type="text"
                    className="inputTag"
                    {...register("name", {
                        required: "This is required.",
                        minLength: {
                            value: 2,
                            message: "Minimum 2 character is required",
                        },
                    })}
                    placeholder="Enter Employee Name"
                />
                <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ message }) => <p className="errorMsg">{message}</p>}
                />
                <label htmlFor="degree" className="inputLabel">Degree</label><input
                    type="text"
                    className="inputTag"
                    {...register("designation", {
                        required: "This is required.",
                        minLength: {
                            value: 2,
                            message: "Minimum 2 character is required",
                        },
                    })}
                    placeholder="Enter Employee Designation Name"
                />
                <ErrorMessage
                    errors={errors}
                    name="designation"
                    render={({ message }) => <p className="errorMsg">{message}</p>}
                />
                <button className="submitBtn" type="submit">
                    {empid ? "Update" : "Add"} Employee
                </button>
            </form>
        </div>
    );
}
