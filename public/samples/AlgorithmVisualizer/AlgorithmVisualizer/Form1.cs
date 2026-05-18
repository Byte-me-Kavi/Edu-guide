using System;
using System.Windows.Forms;

namespace AlgorithmVisualizer
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnSorting_Click(object sender, EventArgs e)
        {
            SortingVisualizerForm sortingForm = new SortingVisualizerForm();
            sortingForm.FormClosed += (s, args) => this.Show();
            this.Hide();
            sortingForm.Show();
        }

        private void btnPathfinding_Click(object sender, EventArgs e)
        {
            PathfindingVisualizerForm pathForm = new PathfindingVisualizerForm();
            pathForm.FormClosed += (s, args) => this.Show();
            this.Hide();
            pathForm.Show();
        }
    }
}
