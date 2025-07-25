import axios from 'axios';
import { ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import api from '../lib/axios';

const Createpage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            toast.error("All Field are Required")
            return;
        }
        setLoading(true);
        try {
            await api.post("/notes", {
                title, content
            })
            toast.success("Note Created 😊")
            navigate("/")
        } catch (error) {
            console.log("error in creating note", error);
            if (error.response.status === 429) {
                toast.error("slow down! You'r creating notes too fast", {
                    duration: 3000, icon: "🤔"
                });
            } else { toast.error("failed to Create Note 😒") }

        } finally {
            setLoading(false)
        }


    }
    return (
        <div className='min-h-screen bg-base-200'>
            <div className='container mx-auto px-4 py-8'>
                <div className='max-w-2xl mx-auto'>
                    <Link to={"/"} className='btn btn-ghost mb-6'>
                        <ArrowLeftIcon className='size-6' />
                        Back to Notes
                    </Link>
                    <div className='card bg-base-100'>
                        <div className='card-body'>
                            <h2 className='card-title text-2xl mb-4'>Create New Note</h2>
                            <form onSubmit={handleSubmit}>
                                <div className='form-control mb-4'>
                                    <lable className="lable">
                                        <span className="lable-text">Title</span>
                                    </lable>
                                    <input type="text" placeholder='Note Title' className='input input-bordered' value={title} onChange={(e) => setTitle(e.target.value
                                    )} />
                                </div>

                                <div className='form-control mb-4'>
                                    <lable className="lable">
                                        <span className="lable-text">Content</span>
                                    </lable>
                                    <input type="text" placeholder='Note Content' className='textarea textarea-bordered h-32' value={content} onChange={(e) => setContent(e.target.value
                                    )} />
                                </div>

                                <div className='card-actions justify-end'>
                                    <button type='submit' className="btn btn-primary" disabled={loading}>
                                        {loading ? "creating..." : "Submit"}
                                    </button>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Createpage