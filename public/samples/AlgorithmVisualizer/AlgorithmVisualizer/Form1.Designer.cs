namespace AlgorithmVisualizer
{
    partial class Form1
    {
        private System.ComponentModel.IContainer components = null;

        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        private void InitializeComponent()
        {
            this.btnSorting = new System.Windows.Forms.Button();
            this.btnPathfinding = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // btnSorting
            // 
            this.btnSorting.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnSorting.Location = new System.Drawing.Point(219, 151);
            this.btnSorting.Name = "btnSorting";
            this.btnSorting.Size = new System.Drawing.Size(350, 60);
            this.btnSorting.TabIndex = 0;
            this.btnSorting.Text = "Sorting Visualizer";
            this.btnSorting.UseVisualStyleBackColor = true;
            this.btnSorting.Click += new System.EventHandler(this.btnSorting_Click);
            // 
            // btnPathfinding
            // 
            this.btnPathfinding.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnPathfinding.Location = new System.Drawing.Point(219, 235);
            this.btnPathfinding.Name = "btnPathfinding";
            this.btnPathfinding.Size = new System.Drawing.Size(350, 60);
            this.btnPathfinding.TabIndex = 1;
            this.btnPathfinding.Text = "Pathfinding Visualizer";
            this.btnPathfinding.UseVisualStyleBackColor = true;
            this.btnPathfinding.Click += new System.EventHandler(this.btnPathfinding_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Segoe UI", 24F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label1.Location = new System.Drawing.Point(192, 53);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(409, 54);
            this.label1.TabIndex = 2;
            this.label1.Text = "Algorithm Visualizer";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.btnPathfinding);
            this.Controls.Add(this.btnSorting);
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Algorithm Visualizer - Main Menu";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        private System.Windows.Forms.Button btnSorting;
        private System.Windows.Forms.Button btnPathfinding;
        private System.Windows.Forms.Label label1;
    }
}
