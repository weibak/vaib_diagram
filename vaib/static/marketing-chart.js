async function loadMarketingChart() {

    const response = await fetch(
        "/api/marketing-chart/"
    );

    if (!response.ok) {
        throw new Error(
            "Failed to load chart data"
        );
    }

    const responseData = await response.json();

    const data = responseData.data;

    renderMarketingChart(data);
}


function renderMarketingChart(data) {

    /*
     * Даты
     */
    const categories = data.map(
        item => item.date
    );


    /*
     * Cost
     */
    const cost = data.map(
        item => item.cost
    );


    /*
     * CPA
     */
    const cpa = data.map(
        item => item.cpa
    );


    /*
     * ROI
     */
    const roi = data.map(
        item => item.roi
    );


    /*
     * Conversions
     */
    const conversions = data.map(
        item => item.conversions
    );


    Highcharts.chart(
        "marketing-chart",
        {

            chart: {

                backgroundColor: "#fde9e9",

                spacingTop: 30,
                spacingRight: 30,
                spacingBottom: 30,
                spacingLeft: 30,

                animation: false,
            },


            title: {
                text: null,
            },


            credits: {
                enabled: false,
            },


            legend: {
                enabled: false,
            },


            /*
             * X AXIS
             */
            xAxis: {

                categories: categories,

                lineColor: "#c6c6c6",

                lineWidth: 1,

                tickColor: "#c6c6c6",

                tickLength: 0,

                labels: {
                    enabled: false,
                },

                crosshair: {
                    color: "#aaa",

                    width: 1,

                    dashStyle: "Dash",
                },
            },


            /*
             * Y AXES
             */
            yAxis: [

                {
                    /*
                     * Основные данные:
                     *
                     * Cost
                     * ROI
                     * Conversions
                     */
                    title: {
                        text: null,
                    },

                    min: 0,

                    gridLineWidth: 0,

                    labels: {
                        enabled: false,
                    },
                },


                {
                    /*
                     * CPA
                     */
                    title: {
                        text: null,
                    },

                    min: 0,

                    gridLineWidth: 0,

                    labels: {
                        enabled: false,
                    },

                    opposite: true,
                },

            ],


            /*
             * TOOLTIP
             */
            tooltip: {

                shared: true,

                useHTML: true,

                backgroundColor: "transparent",

                borderWidth: 0,

                shadow: false,

                padding: 0,

                formatter: function () {

                    const index =
                        this.points[0].point.index;

                    const item = data[index];


                    return `
                        <div class="chart-tooltip">

                            <div class="chart-tooltip__date">
                                ${formatDate(item.date)}
                            </div>


                            <div class="chart-tooltip__row">

                                <span
                                    class="
                                        chart-tooltip__dot
                                        chart-tooltip__dot--cost
                                    "
                                ></span>

                                <span>
                                    Cost:
                                </span>

                                <strong>
                                    ${formatNumber(item.cost)}
                                </strong>

                            </div>


                            <div class="chart-tooltip__row">

                                <span
                                    class="
                                        chart-tooltip__dot
                                        chart-tooltip__dot--cpa
                                    "
                                ></span>

                                <span>
                                    CPA:
                                </span>

                                <strong>
                                    ${formatNumber(item.cpa)}
                                </strong>

                            </div>


                            <div class="chart-tooltip__row">

                                <span
                                    class="
                                        chart-tooltip__dot
                                        chart-tooltip__dot--roi
                                    "
                                ></span>

                                <span>
                                    ROI confirmed:
                                </span>

                                <strong>
                                    ${formatNumber(item.roi)}
                                </strong>

                            </div>


                            <div class="chart-tooltip__row">

                                <span
                                    class="
                                        chart-tooltip__dot
                                        chart-tooltip__dot--conversions
                                    "
                                ></span>

                                <span>
                                    Conversions:
                                </span>

                                <strong>
                                    ${item.conversions}
                                </strong>

                            </div>

                        </div>
                    `;
                },
            },


            /*
             * GLOBAL SERIES SETTINGS
             */
            plotOptions: {

                series: {

                    animation: false,

                    stickyTracking: true,

                    states: {

                        hover: {
                            enabled: true,
                        },
                    },
                },


                area: {

                    marker: {
                        enabled: true,

                        radius: 4,
                    },
                },


                spline: {

                    marker: {
                        enabled: true,

                        radius: 3,
                    },
                },


                line: {

                    marker: {
                        enabled: true,

                        radius: 5,
                    },
                },


                column: {

                    borderWidth: 0,

                    pointPadding: 0.15,

                    groupPadding: 0.1,
                },
            },


            /*
             * SERIES
             */
            series: [

                /*
                 * 🟡 AREA
                 *
                 * Cost
                 */
                {
                    name: "Cost",

                    type: "area",

                    yAxis: 0,

                    data: cost,

                    color: "#fff36b",

                    fillColor:
                        "rgba(255, 225, 70, 0.30)",

                    lineColor: "#fff36b",

                    lineWidth: 1,

                    zIndex: 1,
                },


                /*
                 * 🔵 BAR
                 *
                 * CPA
                 */
                {
                    name: "CPA",

                    type: "column",

                    yAxis: 1,

                    data: cpa,

                    color: "#3478f6",

                    pointWidth: 10,

                    zIndex: 5,
                },


                /*
                 * 🟢 SPLINE
                 *
                 * ROI
                 */
                {
                    name: "ROI confirmed",

                    type: "spline",

                    yAxis: 0,

                    data: roi,

                    color: "#168b18",

                    lineWidth: 5,

                    zIndex: 4,

                    marker: {

                        enabled: true,

                        radius: 3,

                        fillColor: "#168b18",

                        lineColor: "#168b18",

                        lineWidth: 1,
                    },
                },


                /*
                 * 🟣 LINE
                 *
                 * Conversions
                 */
                {
                    name: "Conversions",

                    type: "line",

                    yAxis: 0,

                    data: conversions,

                    color: "#a000e8",

                    lineWidth: 2,

                    zIndex: 6,

                    marker: {

                        enabled: true,

                        radius: 6,

                        symbol: "square",

                        fillColor: "#a000e8",

                        lineColor: "#a000e8",

                        lineWidth: 1,
                    },
                },
            ],
        }
    );
}


/*
 * Формат даты:
 *
 * 2026-06-14
 * ↓
 * 14.06.2026
 */
function formatDate(date) {

    const [
        year,
        month,
        day
    ] = date.split("-");


    return `${day}.${month}.${year}`;
}


/*
 * Числовой формат.
 */
function formatNumber(value) {

    return Number(value).toFixed(2);
}


/*
 * Запускаем загрузку.
 */
loadMarketingChart()
    .catch(error => {

        console.error(
            "Chart loading error:",
            error
        );

    });
