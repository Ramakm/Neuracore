import * as d3 from 'd3';

export class Charts {
    constructor(containerId) {
        this.container = document.createElement('div');
        this.container.id = 'charts-container';
        this.container.style.position = 'absolute';
        this.container.style.bottom = '20px';
        this.container.style.right = '20px';
        this.container.style.width = '300px';
        this.container.style.height = '150px';
        this.container.style.backgroundColor = 'rgba(0,0,0,0.5)';
        this.container.style.backdropFilter = 'blur(5px)';
        this.container.style.border = '1px solid rgba(0, 242, 234, 0.3)';
        this.container.style.borderRadius = '8px';
        this.container.style.pointerEvents = 'none';
        document.body.appendChild(this.container);

        this.width = 300;
        this.height = 150;
        this.data = [];
        this.maxDataPoints = 50;

        this.init();
    }

    init() {
        this.svg = d3.select(this.container)
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', `0 0 ${this.width} ${this.height}`);

        this.xScale = d3.scaleLinear().domain([0, this.maxDataPoints - 1]).range([0, this.width]);
        this.yScale = d3.scaleLinear().domain([0, 1]).range([this.height, 0]);

        this.line = d3.line()
            .x((d, i) => this.xScale(i))
            .y(d => this.yScale(d))
            .curve(d3.curveMonotoneX);

        this.path = this.svg.append('path')
            .datum(this.data)
            .attr('fill', 'none')
            .attr('stroke', '#00f2ea')
            .attr('stroke-width', 2);
    }

    update(results) {
        // Calculate a metric to graph. E.g., average open-ness or speed.
        // For simplicity: distance between thumb tip (4) and index tip (8) normalized

        let value = 0;
        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
            const hand = results.multiHandLandmarks[0];
            const p1 = hand[4];
            const p2 = hand[8];
            const dist = Math.sqrt(
                Math.pow(p1.x - p2.x, 2) +
                Math.pow(p1.y - p2.y, 2)
            );
            value = Math.min(Math.max(dist * 2, 0), 1); // Normalize approx
        }

        this.data.push(value);
        if (this.data.length > this.maxDataPoints) {
            this.data.shift();
        }

        this.path.datum(this.data)
            .attr('d', this.line);
    }
}
