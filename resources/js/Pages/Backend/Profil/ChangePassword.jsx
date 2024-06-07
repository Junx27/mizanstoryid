import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import Modal from "@/Components/Backend/Modal";
import Button from "@/Components/Backend/Button";
import TextInput from "@/Components/Backend/TextInput";

function ChangePassword({ profile }) {
    const { data, setData, post, processing } = useForm({
        _method: "PUT",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/resetpassword/${profile.id}`);
    };
    return (
        <div>
            <Modal>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <TextInput
                        type="text"
                        name="kontak"
                        onChange={(e) => setData("password", e.target.value)}
                        placeholder="New password"
                        minLength={5}
                        maxLength={25}
                        required
                    />
                    <Button disabled={processing}>Submit</Button>
                </form>
            </Modal>
        </div>
    );
}

export default ChangePassword;
