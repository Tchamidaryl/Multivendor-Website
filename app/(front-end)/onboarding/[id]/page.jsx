import NewFarmerForm from '@/components/backoffice/NewFarmerForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function page({ params: { id } }) {
    const users = await getData("users");
    console.log(users)
    return (
        <div>
            <div className="flex flex-col gap-6 p-16">
                <div className="max-w-4xl p-4 mx-auto">
                    <h2 className="">Tell Us More About Yourself</h2>
                </div>
                <NewFarmerForm/>
            </div>
        </div>
    )
}
