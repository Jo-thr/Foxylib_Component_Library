/*
  This example requires some changes to your tailwind.config.js :
  module.exports = {
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }
*/

const notifications = [
  {
    label: "Comments",
    description: "Get notified when someones posts a comment on a posting.",
  },
  {
    label: "Candidates",
    description: "Get notified when a candidate applies for a job.",
  },
  {
    label: "Offers",
    description: "Get notified when a candidate accepts or rejects an offer.",
  },
];

export default function Checkbox() {
  return (
    <fieldset className="space-y-5">
      <legend className="sr-only">Notifications</legend>
      {notifications.map((notif) => (
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id={notif.label}
              aria-describedby={notif.label + "-description"}
              name={notif.label}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-primary"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor={notif.label} className="font-medium text-gray-700">
              {notif.label}
            </label>
            <p id={notif.label + "-description"} className="text-gray-500">
              {notif.description}
            </p>
          </div>
        </div>
      ))}
    </fieldset>
  );
}
