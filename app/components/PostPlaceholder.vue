<template>
  <div style="display: flex; align-items: center; justify-content: center; height: 300px; width: 100%;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" height="200" width="200">
        <circle fill="none" stroke-opacity="1" stroke="#88f" stroke-width=".5" cx="100" cy="100" r="0">
          <animate attributeName="r" calcMode="spline" dur="0.5" values="1;80" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate>
          <animate attributeName="stroke-width" calcMode="spline" dur="0.5" values="0;25" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate>
          <animate attributeName="stroke-opacity" calcMode="spline" dur="0.5" values="1;0" keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate>
        </circle>
      </svg>
  </div>
</template>
