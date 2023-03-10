
export default function PronounInput() {
  const options: string[] = [ 'he','she','they','other' ];
  
  return (
    <div>
      <label htmlFor="location" className="block text-sm font-medium text-gray-700">
        Pronouns
      </label>
      <select
        id="pronoun"
        name="pronoun"
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        defaultValue="Select"
      >
        {options.map((element)=> <option>{element}</option>)}
      </select>
    </div>
  )
}