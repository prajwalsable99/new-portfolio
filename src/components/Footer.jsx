import React from 'react'
import contact from '../assets/images/contact.jpg'
const Footer = () => {
  return (
    <footer id='Contact'
  aria-label="Site Footer"
  className="bg-black dark:bg-gray-900 lg:grid lg:grid-cols-5"
>
  <div className="relative block h-32 lg:col-span-2 lg:h-full">
    <img
      src={contact}
      alt=""
      className="absolute inset-0 object-cover w-full h-full"
    />
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          <span
            className="text-xs tracking-wide text-white 500 uppercase dark:text-white 400"
          >
            Call us
          </span>

          <a
            href="#"
            className="block text-2xl font-medium text-white 900 hover:opacity-75 dark:text-white sm:text-3xl"
          >
            7517780449
          </a>
        </p>

        <ul className="mt-8 space-y-1 text-sm text-white 700 dark:text-white 200">
          <li>Monday to Friday: 9am - 5pm</li>
          <li>Weekend: 11am - 3pm</li>
        </ul>

        <ul className="flex gap-6 mt-8">
          <li>
            <a
              href="https://www.linkedin.com/in/prajwal-sable-0273921b1"
              rel='noreferer'
              target="_blank"
              className="text-white 700 transition hover:opacity-75 dark:text-white 200"
            >
              <span className="sr-only">Linked in</span>

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://instagram.com/ig_prajwal_2001?igshid=ZmZhODViOGI="
              rel="noreferrer"
              target="_blank"
              className="text-white 700 transition hover:opacity-75 dark:text-white 200"
            >
              <span className="sr-only">Instagram</span>

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/Prajwal92957932?t=ZkjisNMQAJ_YzM6kgGQ-BA&s=09"
              rel="noreferrer"
              target="_blank"
              className="text-white 700 transition hover:opacity-75 dark:text-white 200"
            >
              <span className="sr-only">Twitter</span>

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/prajwalsable99"
              rel="noreferrer"
              target="_blank"
              className="text-white 700 transition hover:opacity-75 dark:text-white 200"
            >
              <span className="sr-only">GitHub</span>

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/7517780449"
              rel='noreferer'
              target="_blank"
              className="text-white 700 transition hover:opacity-75 dark:text-white 200"
            >
              <span className="sr-only">Whatsapp</span>

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-5.971 18l.844-3.081c-.52-.902-.794-1.925-.794-2.973.001-3.279 2.668-5.946 5.946-5.946 1.591.001 3.084.62 4.206 1.744 1.123 1.124 1.741 2.618 1.74 4.207-.001 3.279-2.669 5.946-5.946 5.946-.995 0-1.976-.25-2.844-.724l-3.152.827zm3.298-1.903c.838.497 1.638.796 2.696.796 2.724 0 4.943-2.217 4.944-4.942.001-2.731-2.208-4.945-4.94-4.946-2.726 0-4.943 2.217-4.944 4.942 0 1.112.326 1.946.873 2.817l-.499 1.824 1.87-.491zm5.694-2.732c-.037-.062-.136-.099-.285-.174-.149-.074-.879-.434-1.015-.483-.136-.05-.235-.074-.334.074-.099.149-.384.483-.47.583-.087.099-.173.112-.322.037-.149-.074-.627-.231-1.195-.737-.442-.394-.74-.881-.827-1.029-.087-.149-.009-.229.065-.303l.223-.26.149-.248c.05-.099.025-.186-.012-.26l-.458-1.103c-.121-.29-.243-.25-.334-.255l-.286-.007c-.099 0-.26.037-.396.186s-.52.508-.52 1.24c0 .731.532 1.438.607 1.537.074.099 1.048 1.6 2.538 2.243.354.153.631.245.847.313.356.113.68.097.936.059.285-.043.879-.359 1.003-.706.123-.348.123-.645.086-.707z'
                />
              </svg>
            </a>
          </li>

         

              
             
          
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium text-white 900 dark:text-white">Services</p>

          <nav aria-label="Footer Navigation - Services" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <p
                
                  className="text-white 700 transition hover:opacity-75 dark:text-white 200"
                >
                  1on1 Coaching
                </p>
              </li>

              <li>
                <p
                
                  className="text-white 700 transition hover:opacity-75 dark:text-white 200"
                >
                  Freelancing
                </p>
              </li>

              <li>
                <p
                  
                  className="text-white 700 transition hover:opacity-75 dark:text-white 200"
                >
                  Tech help
                </p>
              </li>

              

              
              
            </ul>
          </nav>
        </div>

        <div>
          {/* <p className="font-medium text-white 900 dark:text-white">Company</p> */}


             
              
        </div>
      </div>
    </div>

    <div className="pt-12 mt-12 border-t border-gray-100 dark:border-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <nav aria-label="Footer Navigation - Support">
          <ul className="flex flex-wrap gap-4 text-xs">
            <li>
              <p
                className="text-white 500 transition hover:opacity-75 dark:text-white 400"
              >
                Terms & Conditions
              </p>
            </li>

            <li>
              <p
                
                className="text-white 500 transition hover:opacity-75 dark:text-white 400"
              >
                Privacy Policy
              </p>
            </li>

            <li>
              <p
            
                className="text-white 500 transition hover:opacity-75 dark:text-white 400"
              >
                Cookies
              </p>
            </li>
          </ul>
        </nav>

        <p className="mt-8 text-xs text-white 500 dark:text-white 400 sm:mt-0">
          &copy; 2022. Prajwal Sable. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer