import React, { useState } from 'react';

function SearchBar(props) {
    const [jobCriteria, setJobCriteria] = useState({
        title: "",
        location: "",
        experience: "",
        type: ""
    });

    const handleChange = (e) => {
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const search = async () => {
        await props.fetchJobsCustom(jobCriteria);
    };

    return (
        <div className='flex flex-col gap-4 my-10 justify-center px-4 sm:px-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
                <select onChange={handleChange} name="title" value={jobCriteria.title} className='py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                    <option value="" disabled hidden>Job Role</option>
                    <option value="App Developer">App Developer</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Web Developer">Web Developer</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Systems Engineer">Systems Engineer</option>
                </select>
                <select onChange={handleChange} name="type" value={jobCriteria.type} className='py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                    <option value="" disabled hidden>Job Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Contract">Contract</option>
                </select>
                <select onChange={handleChange} name="location" value={jobCriteria.location} className='py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                    <option value="" disabled hidden>Location</option>
                    <option value="Remote">Remote</option>
                    <option value="In-Office">In-Office</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
                <select onChange={handleChange} name="experience" value={jobCriteria.experience} className='py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                    <option value="" disabled hidden>Experience</option>
                    <option value="Fresher">Fresher</option>
                    <option value="Junior Level">Junior Level</option>
                    <option value="Mid Level">Mid Level</option>
                    <option value="Senior Level">Senior Level</option>
                </select>
            </div>
            <button onClick={search} className='bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-4 py-3 rounded-md text-sm md:px-10 md:py-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg'>Search</button>
        </div>
    );
}

export default SearchBar;
