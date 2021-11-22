<template>
  <svg class="skilltree"></svg>
</template>

<script>
import * as d3 from 'd3'

export default {
  data() {
    return {
      treeData: {},
    }
  },
  mounted() {
    const self = this
    // Set courses

    self.treeData = {
      groups: [
        {
          id: 0,
          color: '#fff',
          name: 'You',
        },
        {
          id: 1,
          color: '#00ff00',
          name: 'submission',
          description: 'Courses related to submission',
        },
        {
          id: 2,
          color: '#ff00ff',
          name: 'toys',
          description: 'Courses related to toy handling',
        },
      ],
      nodes: [
        { id: 'You', group: 0 },
        { id: 'Submission 1', group: 1 },
        { id: 'Submission 2', group: 1 },
        { id: 'Pet Play 1', group: 1 },
        { id: 'Pet Play 2', group: 1 },
        { id: 'Toys 1', group: 2 },
        { id: 'Toys 2', group: 2 },
        { id: 'Toys 3', group: 2 },
        { id: 'Chastity 1', group: 2 },
        { id: 'Chastity 2', group: 2 },
      ],
      links: [
        { source: 'Submission 1', target: 'You', value: 1 },
        { source: 'Submission 2', target: 'Submission 1', value: 1 },
        { source: 'Pet Play 1', target: 'Submission 1', value: 1 },
        { source: 'Pet Play 2', target: 'Pet Play 1', value: 1 },
        { source: 'Toys 1', target: 'You', value: 1 },
        { source: 'Toys 2', target: 'Toys 1', value: 1 },
        { source: 'Toys 3', target: 'Toys 2', value: 1 },
        { source: 'Chastity 1', target: 'Toys 1', value: 1 },
        { source: 'Chastity 1', target: 'Submission 1', value: 1 },
        { source: 'Chastity 2', target: 'Chastity 1', value: 1 },
      ],
    }

    // Render
    const height = 600
    const width = 600

    function color(d) {
      let color = self.treeData.groups.find((val) => val.id === d.group)
      if (color) {
        color = color.color
      } else {
        color = '#000'
      }
      return color
    }

    const drag = (simulation) => {
      function dragsubject(event) {
        return simulation.find(event.x, event.y)
      }

      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart()
        event.subject.fx = event.subject.x
        event.subject.fy = event.subject.y
      }

      function dragged(event) {
        event.subject.fx = event.x
        event.subject.fy = event.y
      }

      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0)
        event.subject.fx = null
        event.subject.fy = null
      }

      return d3
        .drag()
        .subject(dragsubject)
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended)
    }

    const links = self.treeData.links.map((d) => Object.create(d))
    const nodes = self.treeData.nodes.map((d) => Object.create(d))

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        'link',
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(75)
      )
      .force('charge', d3.forceManyBody().strength(-150))
      .force('center', d3.forceCenter(width / 2, height / 2))

    const svg = d3.select('.skilltree').attr('viewBox', [0, 0, width, height])

    const link = svg
      .append('g')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke-width', (d) => Math.sqrt(d.value))

    const node = svg
      .append('g')
      .attr('stroke', '#000')
      .attr('stroke-width', 1)
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', 15)
      .attr('fill', color)
      .call(drag(simulation))

    node.append('title').text((d) => d.id)

    simulation.on('tick', () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y)

      node.attr('cx', (d) => d.x).attr('cy', (d) => d.y)
    })
  },
}
</script>

<style>
.skilltree {
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 48px);
  display: block;
}

.skilltree .link {
  fill: transparent;
}
</style>
