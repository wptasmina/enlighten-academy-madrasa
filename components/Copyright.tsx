import Link from "next/link";
import React from "react";

function Copyright() {
  return (
    <div className="bg-[#212121] text-gray-400 py-4 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between">
      {/* Copyright Text */}
      <div className="mb-2 md:mb-0 text-center md:text-left">
        <p className="text-sm">Copyright All Right Reserved 2025. GoodLayers</p>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4 text-green-400">
        {/* Replace these with actual icon components or SVGs */}
        <Link href="#" aria-label="Facebook" className="hover:text-white">
          {/* Placeholder for Facebook Icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 10h-2V7h2V5h-2V2h-2v3H8v2h2v3H8v2h2v7h2v-7h2v-2z"></path>
          </svg>
        </Link>
        <Link href="#" aria-label="Twitter" className="hover:text-white">
          {/* Placeholder for Twitter Icon (X) */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h.62l-6.142 7.025L22 22h-1.92L10.59 11.75 2.122 22H0l8.767-10.024L.256 2.25H2.1l7.14 8.16L17.744 2.25zm-2.915 17.5l-6.095-6.984-6.42 6.984H1.47l6.643-7.22L0 2.9h2.36l5.73 6.57L12.5 2.9h.09zm.49-16.75l-5.73 6.57L7.09 2.9h-.09z"></path>
          </svg>
        </Link>
        <Link href="#" aria-label="LinkedIn" className="hover:text-white">
          {/* Placeholder for LinkedIn Icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.535v-5.467c0-1.3-.464-2.186-1.638-2.186-1.077 0-1.725.728-2.008 1.43c-.097.25-.09.479-.09.708v5.515h-3.535s.047-9.691 0-10.647h3.535v1.517c-.015.01-.03.023-.045.035h.045v-.035c.475-.788 1.34-1.916 3.195-1.916 2.333 0 4.084 1.554 4.084 4.887v5.511zM3.447 7.72H.062V20.47h3.385V7.72zM1.754 4.5c-.958 0-1.734-.776-1.734-1.734C0 1.808.776 1.033 1.734 1.033c.958 0 1.733.775 1.733 1.734 0 .958-.775 1.733-1.733 1.733z"></path>
          </svg>
        </Link>
        <Link href="#" aria-label="Pinterest" className="hover:text-white">
          {/* Placeholder for Pinterest Icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.192 2.766 7.732 6.571 8.89.56.103.766-.242.766-.54 0-.266-.01-1.04-.015-2.043-2.695.586-3.267-1.157-3.267-1.157-.44-.997-.933-1.261-.07-.07.728-.05 1.11.7.19.722 1.488 2.536 3.794 1.806 4.706 1.378.15-.537.584-.972 1.066-1.196-3.6-.41-7.394-1.8-7.394-8.025 0-1.77.632-3.22 1.676-4.354-.168-.41-.726-2.06.16-4.298 0 0 1.36-.436 4.45 1.66.128-.035.257-.067.388-.098.13-.03.26-.06.39-.088 1.54-.34 3.16-.34 4.7 0 .13.028.26.058.39.088.13.03.258.063.388.098 3.09 2.1 4.45 1.66 4.45 1.66.885 2.238.327 3.888.16 4.298 1.044 1.134 1.676 2.584 1.676 4.354 0 6.242-3.8 7.61-7.404 8.016.58.503.967 1.49.967 3.003 0 2.17-.015 3.918-.015 4.445 0 .298.204.646.77.54C19.234 19.732 22 16.192 22 12c0-5.523-4.477-10-10-10z"></path>
          </svg>
        </Link>
        <Link href="#" aria-label="YouTube" className="hover:text-white">
          {/* Placeholder for YouTube Icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.601 15.399l5.006-3.006-5.006-3.006v6.012zM21.593 7.201a2.809 2.809 0 00-1.979-1.979C18.667 5 12 5 12 5s-6.667 0-7.614.222a2.809 2.809 0 00-1.979 1.979C2 8.333 2 12 2 12s0 3.667.222 4.614a2.809 2.809 0 001.979 1.979C5.333 19 12 19 12 19s6.667 0 7.614-.222a2.809 2.809 0 001.979-1.979C22 15.667 22 12 22 12s0-3.667-.222-4.614z"></path>
          </svg>
        </Link>
        <Link href="#" aria-label="Instagram" className="hover:text-white">
          {/* Placeholder for Instagram Icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c2.716 0 3.056.011 4.122.06L17 2.08c1.036.05 1.704.167 2.378.435.658.268 1.157.653 1.657 1.157.504.504.89 1.003 1.157 1.657.268.674.385 1.342.435 2.378.049 1.066.06 1.406.06 4.122s-.011 3.056-.06 4.122a6.362 6.362 0 01-.435 2.378c-.268.658-.653 1.157-1.157 1.657-.504.504-1.003.89-1.657 1.157-.674.268-1.342.385-2.378.435-1.066.049-1.406.06-4.122.06s-3.056-.011-4.122-.06a6.362 6.362 0 01-2.378-.435c-.658-.268-1.157-.653-1.657-1.157-.504-.504-.89-1.003-1.157-1.657-.268-.674-.385-1.342-.435-2.378-.049-1.066-.06-1.406-.06-4.122s.011-3.056.06-4.122a6.362 6.362 0 01.435-2.378c.268-.658.653-1.157 1.157-1.657.504-.504 1.003-.89 1.657-1.157.674-.268 1.342-.385 2.378-.435C8.944 2.011 9.284 2 12 2zm0 2.164a7.836 7.836 0 100 15.672 7.836 7.836 0 000-15.672zm0 3.097a5.578 5.578 0 100 11.156 5.578 5.578 0 000-11.156zm6.363-.497a1.488 1.488 0 100 2.976 1.488 1.488 0 000-2.976z"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Copyright;
