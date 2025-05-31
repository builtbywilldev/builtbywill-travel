import { Header } from 'components'
import React from 'react'
import {ComboBoxComponent} from "@syncfusion/ej2-react-dropdowns";
import type { Route } from './+types/Create-trip';

export const loader = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()

    return data.map((country: any) => ({
        name: country.flag + country.name.common, 
        coordinates: country.latlng,
        value: country.name.common,
        openStreetMap: country.maps?.openStreetMap, 

}))
}

const Createtrip = ({ loaderData }: Route.ComponentProps ) => {
    const handleSubmit = async () => {};
    const countries = loaderData as Country[]

    const countryData = countries.map((country) => ({
        text: country.name,
        value: country.value, 
    }))

  return (
    <main className='flex flex-col gap-10 pb-20 wrapper'>
        <Header title="Add a new trip" description='view and edit AI generated travel plans'/>
        <section className="mt-2.5 wrapper-md">
            <form className='trip-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="country">
                        Country
                    </label>
                       <ComboBoxComponent
                        id="country"
                        dataSource={countryData}
                        fields={{ text: 'text', value: 'value'}}
                        placeholder='Slect a country'
                        className='combo-box'
                       
                       /> 
                </div>
            </form>
        </section>
    </main>
  )
}

export default Createtrip