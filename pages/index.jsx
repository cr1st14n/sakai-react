import React from 'react';
import Link from 'next/link';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';

const EmptyPage = () => {
    return (
        <div className="grid">
             <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>Vertical</h5>
                    <div className="field">
                        <label htmlFor="name1">Name</label>
                        <InputText id="name1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="email1">Email</label>
                        <InputText id="email1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="age1">Age</label>
                        <InputText id="age1" type="text" />
                    </div>
                </div>

                <div className="card p-fluid">
                    <h5>Vertical Grid</h5>
                    <div className="formgrid grid">
                        <div className="field col">
                            <label htmlFor="name2">Name</label>
                            <InputText id="name2" type="text" />
                        </div>
                        <div className="field col">
                            <label htmlFor="email2">Email</label>
                            <InputText id="email2" type="text" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>Horizontal</h5>
                    <div className="field grid">
                        <label htmlFor="name3" className="col-12 mb-2 md:col-2 md:mb-0">
                            Name
                        </label>
                        <div className="col-12 md:col-10">
                            <InputText id="name3" type="text" />
                        </div>
                    </div>
                    <div className="field grid">
                        <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                            Email
                        </label>
                        <div className="col-12 md:col-10">
                            <InputText id="email3" type="text" />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h5>Inline</h5>
                    <div className="formgroup-inline">
                        <div className="field">
                            <label htmlFor="firstname1" className="p-sr-only">
                                Firstname
                            </label>
                            <InputText id="firstname1" type="text" placeholder="Firstname" />
                        </div>
                        <div className="field">
                            <label htmlFor="lastname1" className="p-sr-only">
                                Lastname
                            </label>
                            <InputText id="lastname1" type="text" placeholder="Lastname" />
                        </div>
                        <Button label="Submit"></Button>
                    </div>
                </div>

                <div className="card">
                    <h5>Help Text</h5>
                    <div className="field p-fluid">
                        <label htmlFor="username">Username</label>
                        <InputText id="username" type="text" />
                        <small>Enter your username to reset your password.</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmptyPage;
